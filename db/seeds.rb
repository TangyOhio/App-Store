100.times do
  name = Faker::App.unique.name
  description = Faker::Hobbit.quote
  price = Faker::Number.decimal(2)
  category = Faker::Demographic.race
  version = Faker::App.version
  author = Faker::App.author
  logo = Faker::LoremPixel.image("50x50", 'people')
  App.create( name: name, description: description, price: price, category: category, version: version, author: author, logo: logo)
end