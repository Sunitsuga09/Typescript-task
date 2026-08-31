/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const previousMeter = 25640;
const currentMeter = 25892;
const pricePerKwh = 1650;
const hasSolarPanel = true;
const energySavingModeEnabled = false;

const energyConsumption = currentMeter - previousMeter;
const electricityBill = energyConsumption * pricePerKwh;
const solarDiscount = hasSolarPanel ? electricityBill * 0.2 : 0;
const savingModeDiscount = energySavingModeEnabled ? (electricityBill - solarDiscount) * 0.05 : 0;
const finalBill = electricityBill - solarDiscount - savingModeDiscount;
const greenEnergyEligible = 
  hasSolarPanel && 
  energyConsumption < 300 && 
  energySavingModeEnabled;

console.log(`Total Energy Consumption: ${energyConsumption} kWh`);
console.log(`Electricity Bill: Rp${electricityBill.toLocaleString('id-ID')}`);
console.log(`Final Bill: Rp${finalBill.toLocaleString('id-ID')}`);
console.log(`Green Energy Program Eligible: ${greenEnergyEligible}`);