import os

def remove_templates_dir(env, template, **kwargs):
    """Remove templates dir from outputed site"""
    if template.name.startswith('templates/'):
        output_template_path = template.name[len('templates/'):]
    else:
        output_template_path = template.name

    env._ensure_dir(output_template_path)
    filepath = os.path.join(env.outpath, output_template_path)
    template.stream(**kwargs).dump(filepath, env.encoding)
