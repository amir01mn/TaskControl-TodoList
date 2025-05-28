class Api::TodosController < ApplicationController
  before_action :authorize_request
  before_action :set_todo, only: %i[ show update_completed destroy ]

  # GET /todos
  def index
    @todos = current_user.todos.order(created_at: :desc)
    render json: @todos
  end

  # GET /todos/1
  def show
    render json: @todo
  end

  # POST /todos
  def create
    @todo = current_user.todos.new(todo_params)
    if @todo.save
      render json: @todo, status: :created
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end
  

  # PATCH/PUT /todos/1
  def update_completed
    if @todo.update(completed: params[:completed])
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  def destroy
    @todo.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = current_user.todos.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def todo_params
      params.permit(:todo_name, :completed, :category, :priority, :due_date)
    end

    def authorize_request
      header = request.headers['Authorization']
      header = header.split(' ').last if header
      begin
        decoded = JWT.decode(header, Rails.application.credentials.secret_key_base)[0]
        @current_user = User.find(decoded['user_id'])
      rescue
        render json: { errors: 'Unauthorized' }, status: :unauthorized
      end
    end

    def current_user
      @current_user
    end
end
