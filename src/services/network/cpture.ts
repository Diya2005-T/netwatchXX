import { sniff, IP, TCP, UDP, DNS, Raw, wrpcap } from "scapy";

export const startPacketCapture = (interface: string, filter: string) => {
  console.log(`Starting packet capture on interface: ${interface} with filter: ${filter}`);
  sniff(iface=interface, prn=packetCallback, filter=filter, store=false);
};

const packetCallback = (packet: any) => {
  if (packet.hasLayer(IP)) {
    const srcIp = packet[IP].src;
    const dstIp = packet[IP].dst;
    const protocol = packet[IP].proto;
    console.log(`[Packet] ${srcIp} -> ${dstIp} | Protocol: ${protocol}`);
  }
};