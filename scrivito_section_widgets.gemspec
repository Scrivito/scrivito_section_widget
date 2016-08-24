$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "scrivito_section_widgets/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "scrivito_section_widgets"
  s.version     = ScrivitoSectionWidgets::VERSION

  s.authors     = ["Scrivito"]
  s.email       = ["support@scrivito.com"]
  s.homepage    = "https://www.scrivito.com"

  s.summary     = "Add sections to yout page"
  s.description = "Add sections to yout page"
  s.license     = "LGPL-3.0"

  s.files = Dir[
    "{app,lib,scrivito}/**/*",
    "LICENSE",
    "Rakefile"
  ]

  s.add_dependency 'scrivito'
end
