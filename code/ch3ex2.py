#!/usr/bin/env python

# File: ch3ex2.py
# Modify the LED color on the Linkbot

import barobo

dongle = barobo.Dongle()
dongle.connect()
linkbot = dongle.getLinkbot()

red = 255
green = 0
blue = 255
linkbot.setLEDColor(red, green, blue)
