class AddFieldsToTodos < ActiveRecord::Migration[8.0]
  def change
    add_reference :todos, :user, null: false, foreign_key: true
    add_column :todos, :category, :string, null: false, default: 'general'
    add_column :todos, :priority, :string, null: false, default: 'medium'
    add_column :todos, :due_date, :datetime
    remove_column :todos, :string, :string
  end
end 