Rails.application.routes.draw do

  namespace :api do
    post 'auth/register', to: 'auth#register'
    post 'auth/login', to: 'auth#login'
    resources :todos do
      member do 
        patch 'update_completed'
      end
    end
  end
  
end
