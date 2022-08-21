Rails.application.routes.draw do
  get 'welcome/index'
    devise_for :users
    get '/welcome' => "welcome#index", as: :user_root
    # Defines the root path route ("/")
    root "landing_page#index"
    get "/landing", to: 'landing_page#index'
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end
