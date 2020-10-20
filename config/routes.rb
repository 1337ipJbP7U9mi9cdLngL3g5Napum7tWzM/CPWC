Rails.application.routes.draw do
  resources :users
  root 'splashpages#index'

  resources :contacts,  only: [:index, :new, :create, :destroy]
  # why does this mess things up
  resources :posts
  resources :sessions, only: [:new, :create]

  get 'contacts/destroy_all', to: 'contacts#destroy_all'

  get '/test', to: 'splashpages#test'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
