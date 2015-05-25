class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :name
      t.string :image
      t.text :description
      t.references :user, index: true, foreign_key: true
      t.references :category, index: true, foreign_key: true
      t.integer :viewer
      t.string :bg_width
      t.string :video

      t.timestamps null: false
    end
  end
end
