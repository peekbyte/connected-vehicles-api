const testData = [
    {
        name: 'Kalles Grustransporter AB',
        address: 'Cementvägen 8, 111 11 Södertälje',
        vehicles: [
            {
                vehicleId: 'YS2R4X20005399401',
                regNumber: 'ABC123',
                connected: true
            },
            {
                vehicleId: 'VLUR4X20009093588',
                regNumber: 'DEF456',
                connected: false
            },
            {
                vehicleId: 'VLUR4X20009048066',
                regNumber: 'GHI789',
                connected: true
            }
        ]
    },
    {
        name: 'Johans Bulk AB',
        address: 'Balkvägen 12, 222 22 Stockholm',
        vehicles: [
            {
                vehicleId: 'YS2R4X20005388011',
                regNumber: 'JKL012',
                connected: false
            },
            {
                vehicleId: 'YS2R4X20005387949',
                regNumber: 'DEF456',
                connected: true
            }
        ]
    },
    {
        name: 'Haralds Värdetransporter AB ',
        address: 'Budgetvägen 1, 333 33 Uppsala',
        vehicles: [
            {
                vehicleId: 'VLUR4X20009048066',
                regNumber: 'PQR678',
                connected: true
            },
            {
                vehicleId: 'YS2R4X20005387055',
                regNumber: 'STU901',
                connected: true
            }
        ]
    }
]
module.exports = testData

// |-----------------------------------|
// | Kalles Grustransporter AB         |
// | Cementvägen 8, 111 11 Södertälje  |
// |-----------------------------------|
// | VIN (VehicleId)       Reg. nr.    |
// |-----------------------------------|
// | YS2R4X20005399401     ABC123      |
// | VLUR4X20009093588     DEF456      |
// | VLUR4X20009048066     GHI789      |
// |-----------------------------------|

// |-----------------------------------|
// | Johans Bulk AB                    |
// | Balkvägen 12, 222 22 Stockholm    |
// |-----------------------------------|
// | VIN (VehicleId)       Reg. nr.    |
// |-----------------------------------|
// | YS2R4X20005388011     JKL012      |
// | YS2R4X20005387949     MNO345      |
// ------------------------------------|

// |-----------------------------------|
// | Haralds Värdetransporter AB       |
// | Budgetvägen 1, 333 33 Uppsala     |
// |-----------------------------------|
// | VIN (VehicleId)       Reg. nr.    |
// |-----------------------------------|
// | VLUR4X20009048066     PQR678      |
// | YS2R4X20005387055     STU901      |
// |-----------------------------------|
