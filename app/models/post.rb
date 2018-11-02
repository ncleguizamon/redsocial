# == Schema Information
#
# Table name: posts
#
#  id               :integer          not null, primary key
#  html_content     :text
#  markdown_content :text             not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  user_id          :integer
#
# Indexes
#
#  index_posts_on_user_id  (user_id)
#

class Post < ApplicationRecord
  belongs_to :user
  validates :markdown_content, presence: true
  has_many :images
  after_save :update_images
# atributo virtual 
attr_accessor :image_ids
  def self.latest
    order("id desc")
  end

  private 
    def update_images
     Image.where(post_id: nil).where(id: image_ids)
      .update_all(post_id: self.id)
    end

end
