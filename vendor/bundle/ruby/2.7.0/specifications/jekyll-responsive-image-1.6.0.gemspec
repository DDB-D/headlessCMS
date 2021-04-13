# -*- encoding: utf-8 -*-
# stub: jekyll-responsive-image 1.6.0 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-responsive-image".freeze
  s.version = "1.6.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Joseph Wynn".freeze]
  s.date = "2021-02-23"
  s.description = "\n    Highly configurable Jekyll plugin for managing responsive images. Automatically\n    resizes images and provides a Liquid template tag for loading the images with\n    picture, img srcset, Imager.js, etc.\n  ".freeze
  s.email = ["joseph@wildlyinaccurate.com".freeze]
  s.homepage = "https://github.com/wildlyinaccurate/jekyll-responsive-image".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.1.2".freeze
  s.summary = "Responsive image management for Jekyll".freeze

  s.installed_by_version = "3.1.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<jekyll>.freeze, [">= 2.0", "< 5.0"])
    s.add_runtime_dependency(%q<rmagick>.freeze, [">= 2.0", "< 5.0"])
  else
    s.add_dependency(%q<jekyll>.freeze, [">= 2.0", "< 5.0"])
    s.add_dependency(%q<rmagick>.freeze, [">= 2.0", "< 5.0"])
  end
end
