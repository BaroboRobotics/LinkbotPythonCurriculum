
#!/usr/bin/env python

# File: ch4simple.py
# A simple and complete Python program that moves the motors on a Linkbot

import barobo

dongle = barobo.Dongle()
dongle.connect()
linkbot = dongle.getLinkbot('ABCD')

# Move all joints by 90 degrees in the positive direction
linkbot.move(90, 90, 90)
