class Post < ApplicationRecord
  has_rich_text :body
  extend FriendlyId
  friendly_id  :slug
end
