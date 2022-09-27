
ActiveRecord::Schema[7.0].define(version: 2022_09_16_020526) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"


  create_table "services", force: :cascade do |t|
    t.string "title"
    t.float "price"
    t.bigint "worker_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["worker_id"], name: "index_services_on_worker_id"
  end

  create_table "workers", force: :cascade do |t|
    t.string "title"
    t.string "specialty"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end


  add_foreign_key "services", "workers"
end
