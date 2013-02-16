class Contact < ActiveRecord::Base
  attr_accessible :first_name, :last_name, :email, :phone_number
end
