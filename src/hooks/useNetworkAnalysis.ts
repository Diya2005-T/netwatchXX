import { useEffect, useState } from "react";
import { startPacketCapture, getProtocolDistribution } from "../services/network/capture";

export const useNetworkAnalysis = (interface: string, filter: string) => {
  const [protocolDistribution, setProtocolDistribution] = useState({});

  useEffect(() => {
    startPacketCapture(interface, filter);
    const interval = setInterval(() => {
      setProtocolDistribution(getProtocolDistribution());
    }, 5000); // Update every 5 seconds
    return () => clearInterval(interval);
  }, [interface, filter]);

  return { protocolDistribution };
};