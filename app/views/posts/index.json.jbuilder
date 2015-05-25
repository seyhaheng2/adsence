json.array!(@posts) do |post|
  json.extract! post, :id, :name, :image, :description, :user_id, :category_id, :viewer, :bg_width, :video
  json.url post_url(post, format: :json)
end
