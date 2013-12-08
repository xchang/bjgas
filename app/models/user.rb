class User
  include Mongoid::Document
  include Mongoid::Timestamps
  field :email, type: String
  field :password, type: String
  field :password_confirmation, type: String
  field :role, type: String, default: -> { "customer" }

  validates_presence_of :email, :password
  validates_confirmation_of :password
  validates_uniqueness_of :email, :case_sensitive => false
  validates_format_of :email, with: /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/
end
