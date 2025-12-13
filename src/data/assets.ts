export type AssetType = 'png' | 'svg' | 'zip' | 'jpg' | 'pdf';
export type PreviewType = {
    type: 'image';
    path: string;
} | {
    type: 'icon';
    name: string;
};

export interface AssetItem {
    id: string;
    name: string;
    description: string;
    type: AssetType;
    preview: PreviewType;
    'download-path': string;
}

export const assetData: AssetItem[] = [
    {
        id: 'logo',
        name: 'Crayon Logo',
        description: 'The Logo From CrayonSMP.',
        type: 'png',
        preview: { type: 'image', path: 'logo.png' },
        'download-path': 'logo.png',
    },
    {
        id: 'crayonbanner',
        name: 'Crayon Banner',
        description: 'The Banner From CrayonSMP.',
        type: 'png',
        preview: { type: 'image', path: 'media/CrayonBanner.png' },
        'download-path': 'media/CrayonBanner.png',
    },
    {
        id: 'nexomaker-logo',
        name: 'NexoMaker Logo',
        description: 'The Logo From NexoMaker.',
        type: 'png',
        preview: { type: 'image', path: 'media/NexoMaker-Logo.png' },
        'download-path': 'media/NexoMaker-Logo.png',
    },
    {
        id: 'bluenethosting-logo',
        name: 'BlueNetHosting Logo',
        description: 'The Logo From BlueNetHosting.',
        type: 'png',
        preview: { type: 'image', path: 'media/BlueNetHostingLogo.png' },
        'download-path': 'media/NexoMaker-Logo.png',
    },
];