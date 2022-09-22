class Service < ApplicationRecord 
  validates : :title, :price, presence: true
end 