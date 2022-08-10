Rails.application.routes.draw do
    # Defines the root path route ("/")
    root "landing_page#index"
    get 'landing_page/index'
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end
