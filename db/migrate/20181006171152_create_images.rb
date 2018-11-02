class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :title
      t.string :description
      t.attachment :image_file
      t.timestamps
    end
  end
end
