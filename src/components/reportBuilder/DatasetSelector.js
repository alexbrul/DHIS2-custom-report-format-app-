import React, { useState, useEffect } from 'react'
import { Button, Transfer, TransferOption } from '@dhis2/ui'

export default function DatasetSelector({ selected, setSelected, optionstmp }) {

    const [highL, setHighL] = useState([]);
    const HEIGHT_SELECTOR = "40vh"



    const onChange = (payload) => {
        setSelected(payload.selected); 
    }

    //has to be passed down later. 
    const [options, setOptions] = useState([
        {
            value: 'XesKc0UNEKj',
            label: '001 Outpatient Consultation (OPD)'
        },
        {    
            value: 'mZ7EalOemj2',
            label: '002 Malaria dataset'
        },
        {
            value: 'TsmvMflRNmk',
            label: '003 Hospitalization'
        },
        {
            value: 'JhTgs34Pl1b',
            label: '004 Mental Health and NCDs'
        },
        {    
            value: 'aPPHD1VGcpr',
            label: '005 Gender Based Violence and Abortions'
        },
        {    
            value: 'iynGsJrWbuY',
            label: '006 Surgery Anasthesia & Rehab & Physiotherapy'
        }, 
        {   
            value: 'jq0USnQckxw',
            label: '007 Obstetrical Complications and Deliveries'
        },
        {
            value: 'KnGuR0QeJmQ',
            label: '008 Postnatal , KMC and Neonatal'
        },
        {
            value: 'sqWWN3A2z1p',
            label: '009 Nutrition and Family Planning'
        },
        {
            value: 'd3r98cmbKi4',
            label: '010 Laboratory'
        },
        {
            value: 'XArHJTZMZxq',
            label: '011 Medical Imagery'
        },
        {
            value: 'HIVLAKADGeB',
            label: '012 Ambulance'
        },
        {
            value: 'X1XOMlrgsFg',
            label: '013 DH Stock of tracer drugs'
        },
        {
            value: 'UerYwP2Xbme',
            label: '014 Referral Cervical Cancer Screening and Breast Cancer Early Detection'
        },
        {
            value: 'Eb94c0LrXWN',
            label: '014 Staffing Information'
        },
        {
            value: 'oKI4cf9hz2E',
            lable: '015 DH_Cervical cancer screening and breast cancer early detection'
        }

    ])

    const betterOption = (props) => {
        const { label, value, onClick, highlighted, selected } = props
        // do something if this highlighted

        const customOnClick = (...args) => {
            if (!highlighted) {
                setHighL([label, value])
            }else{
                setHighL([])
            }
            onClick(...args)
        }
        return <TransferOption {...props} onClick={customOnClick} />
    }


    return (
        <div>

            <Transfer
                renderOption={betterOption}
                filterable
                enableOrderChange
                leftHeader={<h5>Available Datasets</h5>}
                rightHeader={<h5>Selected Datasets</h5>}
                onChange={onChange}
                height={HEIGHT_SELECTOR}
                options={options}
                selected={selected}
            />
            <p>test {highL}</p>


        </div>
    )
}
