---
sidebar_position: 3
description: 'M600 MN'
---

# LIS2DW MN


{/* import lib start */}


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


{/* import lib end */}

##  Klipper

SSH


``` shell
cd ~/klipper
make menuconfig 
```


<ImageView src={require('@site/docs/accessories-docs/sensor/lis2dw/img/lis2dw-firmware-config.png').default} width="80%"/>

When I

My `make` Command


``` shell
make
```

## FIreware

Klipper 

Lsb

LSB


``` shell
make flash FLASH_DEVICE=2e8a:0003
```

## Configure Klipper


``` klipper_cfg title="printer.cfg"
# This file contains common pin mappings for the bigtreetech lis2dw v1.0

# To use this config, the firmware should be compiled for the

# RP2040 with "USB"

# The micro-controller will be used to control the components on the nozzle.

# See docs/Config_Reference.md for a description of parameters.

[mcu btt_lis2dw]
serial: /dev/serial/by-id/usb-Klipper_rp2040_btt_acc-if00

[lis2dw]
cs_pin: btt_lis2dw:gpio9
#spi_bus: spi1a

spi_software_sclk_pin: btt_lis2dw:gpio10
spi_software_mosi_pin: btt_lis2dw:gpio11
spi_software_miso_pin: btt_lis2dw:gpio8
axes_map: -y,x,-z

[resonance_tester]
probe_points: 100, 100, 20
accel_chip: lis2dw
```
