Rails.application.routes.draw do
  root 'splashpages#index'

  resources :contacts,  only: [:index, :new, :create, :destroy]
  resources :posts
  resources :sessions, only: [:new, :create]

  get 'contacts/destroy_all', to: 'contacts#destroy_all'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
