class Api::ContactsController < ApplicationController
  expose(:contact)
  expose(:contacts)

  def index
    render json: contacts
  end

  def show
    render json: contact
  end

  def create
    contact.attributes = params[:contact]
    contact.save!
    render json: contact
  end

  def update
    contact.attributes = params[:contact]
    contact.save!
    render json: contact
  end

  def destroy
    contact.destroy
    head :no_content
  end
end
