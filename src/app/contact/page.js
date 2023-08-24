"use client";
import * as React from "react";
import { FooterComponent } from "@/components/footer";
import { HeaderComponent } from "@/components/header";
import Image from "next/image";

import Input from "@mui/joy/Input";

import Textarea from "@mui/joy/Textarea";
import FloatingLabelTextarea from "@/components/StyledTextArea";
import { Button } from "@mui/joy";

export default function ContactPage() {
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent></HeaderComponent>
      {/* <h1 className='text-3xl p-10'>Contact now, connectnow</h1> */}

      <div className="w-full flex flex-col items-center flex-grow justify-center">
        <div className="w-9/12 mt-10 ">
          <div className="w-full flex flex-row rounded-xl overflow-hidden">
            <div className="w-1/2 bg-gray-950">
              <div className="p-28">
                <img
                  className="h-10 rounded-full"
                  src="data:image/png;base64,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"
                />
                {/* <h1 className='text-2xl mt-5'>
                                connectnow
                            </h1> */}
                <div className="w-2/3 border border-blue-400 mt-2 mb-5"></div>
                <p className="text-xl mb-5">1508 10th Ave.</p>
                <p className="text-xl mb-5">Phone:05123532385</p>
                <p className="text-xl mb-5">Seattle,WA 98122</p>
                <p className="text-xl mb-5">info@connectnow.com</p>
              </div>
            </div>
            <div className="w-1/2 bg-gray-200">
              <div className="p-28">
                <h1 className="text-black text-2xl text-center font-bold border-b-2 border-black">
                  {" "}
                  Hit Us Up
                </h1>
                <div className="flex justify-between gap-4 pt-4">
                  <Input className="w-full" placeholder="Name" />
                  <Input className="w-full" placeholder="Surname" />
                </div>
                <Input className="mt-4" placeholder="Company Name" />
                <div className="flex justify-between gap-4 pt-4">
                  <Input className="w-full" type="email" placeholder="Email" />
                  <Input className="w-full" type="number" placeholder="Phone" />
                </div>

                <Textarea
                  minRows={4}
                  className="mt-4"
                  placeholder="Company Name"
                ></Textarea>

                <Button
                  onClick={()=> setLoading(true)}
                  className="mt-4"
                  variant="outlined"
                  loading={loading}
                >
                  Button
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='flex-grow'></div> */}
      <FooterComponent></FooterComponent>
    </div>
  );
}
