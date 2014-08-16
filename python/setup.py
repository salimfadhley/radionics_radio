from setuptools import setup
import os

PROJECT_ROOT, _ = os.path.split(__file__)
REVISION = '0.0.1'
PROJECT_NAME = 'Radionics Radio Data reader'
PROJECT_AUTHORS = "Salim Fadhley"
PROJECT_EMAILS = ''
PROJECT_URL = ""
SHORT_DESCRIPTION = ''

try:
    DESCRIPTION = open(os.path.join(PROJECT_ROOT, "README.rst")).read()
except IOError as _:
    DESCRIPTION = SHORT_DESCRIPTION

GLOBAL_ENTRY_POINTS = {
    "console_scripts": ["convert_radionics_data=radionics_radio.reader:main"]
}

setup(
    name=PROJECT_NAME.lower(),
    version=REVISION,
    author=PROJECT_AUTHORS,
    author_email=PROJECT_EMAILS,
    packages=['radionics_radio', 'radionics_radio_tests'],
    zip_safe=True,
    include_package_data=False,
    install_requires=[],
    test_suite='nose.collector',
    tests_require=['mock', 'nose', 'coverage'],
    entry_points=GLOBAL_ENTRY_POINTS,
    url=PROJECT_URL,
    description=SHORT_DESCRIPTION,
    long_description=DESCRIPTION,
    license='MIT',
    classifiers=[
        'Development Status :: 4 - Beta',
        'Environment :: Console',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Natural Language :: English',
        'Operating System :: OS Independent',
        'Programming Language :: Python :: 2.7',
        'Topic :: Software Development :: Testing',
    ],
)
