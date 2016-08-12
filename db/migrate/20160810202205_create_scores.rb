class CreateScores < ActiveRecord::Migration
  
  def up
    create_table :scores do |t|
      t.string :name
      t.integer :score_num
      t.string :date
      t.string :ip
    end
  end
  
  def down
    drop_table :scores
  end
  
end