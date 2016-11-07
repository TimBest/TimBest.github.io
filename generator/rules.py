import os


def preprocess_templates(env, template, **kwargs):
    """
    Remove templates dir from outputed site and converts .pug -> .html
    """

    if template.name.startswith('templates/'):
        template.name = template.name[len('templates/'):]

    if template.name.endswith('.pug'):
        template.name = template.name[:-len('.pug')] + '.html'

    env._ensure_dir(template.name)
    filepath = os.path.join(env.outpath, template.name)
    template.stream(**kwargs).dump(filepath, env.encoding)
