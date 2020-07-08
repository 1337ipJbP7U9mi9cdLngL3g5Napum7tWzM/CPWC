class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.text :username
      t.string :password_digest
      t.text :role

      t.timestamps
    end
  end
end
