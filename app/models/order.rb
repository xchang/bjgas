class Order
  include Mongoid::Document
  include Mongoid::Timestamps
  field :contact, type: String
  field :address, type: String
  field :specification, type: String
  field :number, type: String
  field :mobile, type: String
  field :telphone, type: String
  field :statue, type: String, default: -> { "created" }

  validates_presence_of :contact, :address, :specification, :number, :mobile
end