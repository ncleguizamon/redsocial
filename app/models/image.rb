# == Schema Information
#
# Table name: images
#
#  id                      :integer          not null, primary key
#  description             :string
#  image_file_content_type :string
#  image_file_file_name    :string
#  image_file_file_size    :integer
#  image_file_updated_at   :datetime
#  title                   :string
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  post_id                 :integer
#
# Indexes
#
#  index_images_on_post_id  (post_id)
#

class Image < ApplicationRecord
    belongs_to :post,  optional: true
    has_attached_file :image_file,  styles: { medium: "300x300>", thumb: "100x100>" }
    validates_attachment_content_type :image_file, content_type: /\Aimage\/.*\z/
end
