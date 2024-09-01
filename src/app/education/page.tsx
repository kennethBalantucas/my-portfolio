import React from 'react'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";

const EducationSection = () => {
    // @ts-ignore
  return (
    <div className="w-[32rem]">
              <Timeline>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography  variant="h6" color='blue' className="leading-none">
                      Timeline Title Here.
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography variant="small" className="font-normal text-gray-600">
                      The key to more success is to have a lot of pillows. Put it this way, it took me
                      twenty five years to get these plants, twenty five years of blood sweat and tears, and
                      I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                      luv.
                    </Typography>
                  </TimelineBody>
                  <TimelineIcon />
                </TimelineItem>
              </Timeline>
              <Timeline className='mt-10'>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader className="h-3">
                    <TimelineIcon />
                    <Typography  variant="h6" color='blue' className="leading-none">
                      Timeline Title Here.
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography variant="small" className="font-normal text-gray-600">
                      The key to more success is to have a lot of pillows. Put it this way, it took me
                      twenty five years to get these plants, twenty five years of blood sweat and tears, and
                      I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                      luv.
                    </Typography>
                  </TimelineBody>
                  <TimelineIcon />
                </TimelineItem>
              </Timeline>
        </div>
  )
}

export default EducationSection
