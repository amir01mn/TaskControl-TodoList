class Todo < ApplicationRecord
  belongs_to :user
  validates :todo_name, presence: true
  validates :category, presence: true
  validates :priority, presence: true, inclusion: { in: %w[low medium high] }
  
  scope :by_priority, -> { order(priority: :desc) }
  scope :by_category, ->(category) { where(category: category) }
  scope :completed, -> { where(completed: true) }
  scope :pending, -> { where(completed: false) }
end
