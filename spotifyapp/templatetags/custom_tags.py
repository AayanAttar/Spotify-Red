from django import template

register = template.Library()

@register.filter(name = 'add_attrs')
def add_attrs(field, attr_string):
    """Add multiple attributes to a form field."""
    attrs = dict(item.split('=') for item in attr_string.split(','))
    return field.as_widget(attrs=attrs)


def add_attrs(field, placeholder):
    """
    Adds placeholder attribute to a form field widget.
    """
    widget = field.field.widget
    widget.attrs.update({'placeholder': placeholder})
    return field