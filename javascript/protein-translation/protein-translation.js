const CODONS_MAP = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP',
};

export function translate(rnaSequence = '') {
    const codons = rnaSequence.match(/.{1,3}/g) || [];
    const proteins = codons.map((codon) => CODONS_MAP[codon]);

    if (proteins.findIndex((protein) => protein === undefined) !== -1) {
        throw new Error('Invalid codon');
    }

    const firstStopIndex = proteins.findIndex((protein) => protein === 'STOP');
    return firstStopIndex !== -1 ? proteins.slice(0, firstStopIndex) : proteins;
}
