# My Personal Website

## Setup
- Create python3 virtualenv [virtualenvwrapper.readthedocs.io](rtualenvwrapper.readthedocs.io)
- `pip install requirements.txt`
- setup precommit hook `cd .git/hooks; ln -s -f ../../pre-commit pre-commit`

## Build
```bash
$ python site/manage.py build
```

## Run locally
```bash
$ python site/manage.py serve
```
