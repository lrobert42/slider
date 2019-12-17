import sys
import time
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)

def stepper:
StepPins = [17,22,23,24]

    for pin in StepPins:
        print("Setup pins")
        GPIO.setup(pin, GPIO.OUT)
        GPIO.output(pin, False)


    Seq = [[1,0,0,1],
           [1,0,0,0],
           [1,1,0,0],
           [0,1,0,0],
           [0,1,1,0],
           [0,0,1,0],
           [0,0,1,1],
           [0,0,0,1]]

    StepCount = len(Seq)
    StepDir = 1

    StepCounter = 0

    while True:

      print(StepCounter)
      print(Seq[StepCounter])

      for pin in range(0, 4):
        xpin = StepPins[pin]#
        if Seq[StepCounter][pin]!=0:
          GPIO.output(xpin, True)
        else:
          GPIO.output(xpin, False)

      StepCounter += StepDir

      # If we reach the end of the sequence
      # start again
      if (StepCounter>=StepCount):
        StepCounter = 0
      if (StepCounter<0):
        StepCounter = StepCount+StepDir

      # Wait before moving on
      time.sleep(WaitTime)
