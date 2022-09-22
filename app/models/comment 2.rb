class Comment < ApplicationRecord
  belongs_to :service

  validates :title, :rating, presence: true
end