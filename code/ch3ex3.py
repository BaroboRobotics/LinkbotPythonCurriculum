#!/usr/bin/env python

# File: ch3ex3.py
# Beep the robot's buzzer a few times

import barobo
import time

dongle = barobo.Dongle()
dongle.connect()
linkbot = dongle.getLinkbot()

for i in range(5):
    print(i)
    linkbot.setBuzzerFrequency(440)
    linkbot.setLEDColor(0, 255, 0)
    time.sleep(1)
    linkbot.setBuzzerFrequency(0)
    linkbot.setLEDColor(0, 0, 0)
    time.sleep(1)
