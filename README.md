# ScrivitoSectionWidgets

Add some widgets to your app to seperate some content.
This gem will add a Section, Video and Parallax effect to your app.

## Installation

Add the gem to your gemfile

    gem 'scrivito_section_widgets'

Add styles to your styles manifest

    *= require scrivito_section_widgets

Add scripts to your script manifest

    //= require scrivito_section_widgets

## Customization

You need to add a method selectable_color_classes to your obj.rb. The parameter widget_name is to make colors selectable for different widgets if needed.

    def selfselectable_color_classes(obj_name, field_name)
      return ["red","green","blue"]
    end

You have to define the styles for these classes.

```css
.red {
  background: red;
}

.green {
  background: green;
}

.blue {
  background: blue;
  color: white;
}
```

## Section over full width of your page

Using Bootstrap 3? Nothing todo.
Using different Stylesheets you will have a dom knot where the page ist contained.
For Example:

```css
.container {
  width: 100%;
  padding: 0;
  margin: 0;
}

section .container {
  width: 1170px; // change for your main width if needed
  padding: 15px;
  margin: 0 auto;
}
```

Before migration check the migration file. We will generate a obj class with name `Video`. It could be, that your app included one from an other widget or you created it by your own. If so, you can delete this part of the migration.
