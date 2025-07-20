
import Box from '@mui/material/Box';
import React, { FC, useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import Image from 'next/image';
import { useFetchInAction } from './query';

const InAction: FC = () => {
    const { data, isLoading } = useFetchInAction()


    return (
        <Box component={"section"} style={{ width: "100%" }} className="md:mt-30 md:mb-30 w-100 items-center justify-center flex-col">
            <div className=" text-center space-y-10 justify-center items-center mb-8 md:mb-10">
                <h1 className=" text-2xl md:text-4xl text-1xl font-semibold">See SchoolHub in Action</h1>
            </div>
            <Box style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderRadius: 20, overflow: "hidden" }} className="mb-10">
                {data && <ReactPlayer
                    src={data[0].videoLink}
                    controls
                    style={{ width: '80%', height: 'auto', aspectRatio: '16/9', margin: "0 auto", borderRadius: 15, backgroundColor: "#E0E1E0" }}
                    light={<Image src={data[0].thumbnail} alt='Thumbnail' width={1280} height={720} style={{ width: '80%', height: 'auto', aspectRatio: '16/9', margin: "0 auto", borderRadius: 15, backgroundColor: "#E0E1E0" }} />}
                />}
            </Box>
        </Box>
    );
};

export default InAction;