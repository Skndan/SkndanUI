
import { Metadata } from "next"
import React from 'react'
import Link from 'next/link';
import Login from '@/components/login';
import Image from 'next/image';


export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

const CustomerPage = () => {
  return (
    <>
      <p>Customer Page</p>
    </>
  );
};

export default CustomerPage;