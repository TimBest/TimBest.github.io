import os


def preprocess_templates(env, template, **kwargs):
    """Remove templates dir from outputed site and conver .jade -> .html"""

    if template.name.startswith('templates/'):
        template.name = template.name[len('templates/'):]

    if template.name.endswith('.jade'):
        template.name = template.name[:-len('.jade')] + '.html'

    env._ensure_dir(template.name)
    filepath = os.path.join(env.outpath, template.name)
    template.stream(**kwargs).dump(filepath, env.encoding)
