# My Personal Website

## Setup
- Create python3 virtualenv [virtualenvwrapper.readthedocs.io](rtualenvwrapper.readthedocs.io)
- `pip install requirements.txt`
- setup precommit hook `cd .git/hooks; ln -s -f ../../pre-commit pre-commit`

## Build
- `python site/manage.py build`

## Test locally
- `python site/manage.py serve`
