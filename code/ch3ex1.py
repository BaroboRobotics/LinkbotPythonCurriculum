#!/usr/bin/env python

# File: ch3ex1.py
# Modify the LED color on the Linkbot

import barobo

dongle = barobo.Dongle()
dongle.connect()
linkbot = dongle.getLinkbot()

linkbot.setLEDColor(255, 0, 0)
