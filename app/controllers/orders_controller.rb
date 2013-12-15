class OrdersController < ApplicationController
  def create
    order = Order.new create_params
    raise AppExceptions::ValidationError.new(order.errors.messages) unless order.valid?
    order.save
    render json: {}, status: :created
  end

  def index
    @orders = Order.all
  end

  private
  def create_params
    params.permit(:contact, :address, :specification, :number, :mobile, :telphone)
  end
end