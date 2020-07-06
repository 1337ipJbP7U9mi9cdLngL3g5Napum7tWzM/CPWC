class ContactsController < ApplicationController

  def index
    @contacts = Contact.all.order('created_at DESC')
  end

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    @contact.save
    redirect_to root_path
  end

  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy

    redirect_to contacts_path
  end

  def destroy_all
    Contact.destroy_all
    redirect_to contacts_path
  end


  private

  def contact_params
    params.require(:contact).permit(:email, :body)
  end

end
