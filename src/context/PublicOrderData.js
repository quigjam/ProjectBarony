const orderReport1 = {
  title: "Bonian King murders Duke of Ankara at Royal Tournament",
  location: "Ebensee, Bolton, Bonia",
  description:
    "After fantastic events of the Royal Tournament at the Bonian Capital of Ebensee, King William I of Bonia performed a historical closing ceremony. Stepping forward and addressing the large,international crowd, the King asked for a representative of Ankara to join him. The King entered into a speach remarking on the disjointed history of the two countries since their seperation 60 years previous. King William spoke to Duke Micheal Irvine, extending an olive branch and asking whether it was time for the reunification of the country. Duke Irvine politley declined stating that a unified Bonia will never happen as long as the King styles himself as the authority of the church. Witnesses reported there was a second of movement from the King and then an explosion of blinding, white light. After several seconds, the audience regained sight and witnessed a starting sight. Where the Ankaran Duke had been, was merely a pile of ash and the King was seemingly draped in divine energy. Some audience members began to run in terror but others were shocked into silence. King William with hair reportivly draped in golden light, issued another speach. He spoke of a coming time of attonement, benediction, and unification with the Chosen. International representatives were quickly and safetly escorted from the event. Ankara has issued a formal denoucenemt of the King's action saying 'If unification was possible before, will never be now. The debt of Irvine's execution will be payed in Bonian blood!'",
};

const orderReport2 = {
  title: "Legendary Mercanary Company Heads North",
  location: "Sjorn's Crossing, Drake, Bonia",
  description:
    "The legendary mercanary companies the Iron Gauntlet arrived in the Bolton Barony of Drake today. The Iron Guantlet is renown for their size and campaigns venturing past the Three Muses, into Faulm territory. The company spent the last month recruiting from surrounding provinces. This will be the Iron Gauntlet's seventh campaign into Faulm and the second under it's current commander. When asked about the odds, the commander merely said 'I am optimistic'. ",
};

const orderReportArray = [orderReport1, orderReport2];

export function get_orders() {
  return orderReportArray;
}
